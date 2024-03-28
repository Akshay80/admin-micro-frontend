"use client"
import React, { useEffect, useRef, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import '../assets/styles/custom.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const searchOrders = /* GraphQL */ `
query SearchOrders(
  $filter: SearchableOrderFilterInput
  $sort: [SearchableOrderSortInput]
  $limit: Int
  $nextToken: String
  $from: Int
  $aggregates: [SearchableOrderAggregationInput]
) {
  searchOrders(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
    from: $from
    aggregates: $aggregates
  ) {
    items {
      id
      code
      items
      rating
      buyerId
      sellerId
      paymentId
      userId
      phone
      currency
      taxTotal
      deliveryTotal
      subTotal
      total
      reason
      pickupAddress
      billingAddress
      deliveryAddress
      orderStatus
      changeLog
      shipmentDetails
      orderDate
      extCarrierId
      serviceCode
      extShipmentId
      rateId
      specialInstructions
      deliveryInstructions
      seller {
        id
        name
        profile
        image
        phone
        email
        website
        address
        images
        rating
      }
      createdAt
      updatedAt
      __typename
    }
    nextToken
    total
    aggregateItems {
      name
      result {
        ... on SearchableAggregateScalarResult {
          value
        }
        ... on SearchableAggregateBucketResult {
          buckets {
            key
            doc_count
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
`;

const containerStyle = {
    width: '80vw',
    height: '500px'
};

const Logistics = () => {
    const [show, setShow] = useState(false);
    const [destination, setDestination] = useState<any>({ lat: 0, lng: 0 });
    const [path, setPath] = useState<any>([]);
    const [truckPosition, setTruckPosition] = useState<any>({ lat: 38.1022015, lng: -84.55154979999999 });
    const [index, setIndex] = useState<any>(0);
    const [listOrders, setListOrders] = useState([])
    const [flipCard, setFlipCard] = useState<any[]>(listOrders.map((order: any) => ({ id: order.id, isFlip: false })));
    const [locationLat, setLocationLong] = useState<any>({})
    const [mapInstance, setMapInstance] = useState<any>(null);
    const [mapCenter, setMapCenter] = useState({
        lat: 38.1022015,
        lng: -84.55154979999999,
    });
    const [selectedMarker, setSelectedMarker] = useState<any>(null);
    const [infoWindowContent, setInfoWindowContent] = useState<any>({});
    const [modalOrder, setModalOrder] = useState<any>({})

    const mapRef = useRef<any>(null);

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        try {
            const response = await API.graphql<GraphQLQuery<any>>({
                query: searchOrders,
                variables: { limit: 20 }
            });
            const parsedOrders = response?.data?.searchOrders?.items?.map((order: any) => {
                if (order?.seller?.address) {
                    const parsedSellerAddress = JSON.parse(order?.seller?.address);
                    const parsedItems = JSON.parse(order?.items);
                    return {
                        ...order,
                        items: parsedItems,
                        seller: {
                            ...order.seller,
                            address: parsedSellerAddress,
                        }
                    }
                }
                return order;
            })
            setListOrders(parsedOrders)


            if (parsedOrders && parsedOrders.length > 0) {
                const firstCard = parsedOrders[0];
                const { latitude, longitude } = firstCard.seller.address;

                if (latitude && longitude) {
                    setLocationLong({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
                }
            }


            // flipcard 
            const initialFlipCards = parsedOrders.map((order: any) => ({ id: order.id, isFlip: false }));
            setFlipCard(initialFlipCards);
        } catch (error) {
            console.log(error);
        }
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC1U6s_cNHlar4BQQP17PDbwx93m8kRkp4",
        libraries: ['geometry']
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map;
        setMapInstance(map);

        // Set the center dynamically based on mapCenter
        const bounds = new window.google.maps.LatLngBounds(mapCenter);
        map.fitBounds(bounds);
        setMap(map);

        const interval = setInterval(() => {
            if (index < path.length - 1) {
                setTruckPosition(path[index]);
                setIndex((prevIndex: any) => prevIndex + 1);
            } else {
                clearInterval(interval); // Stop the interval when the truck reaches the destination
            }
        }, 2000);
    }, [mapCenter]);

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null);
    }, []);

    useEffect(() => {
        if (locationLat && !isNaN(locationLat.lat) && !isNaN(locationLat.lng)) {
            setMapCenter({ lat: locationLat.lat, lng: locationLat.lng });
        }
    }, [locationLat]);

    useEffect(() => {
        if (mapInstance && locationLat.lat && locationLat.lng) {
            const map = mapRef.current;

            const currentCenter = map.getCenter();

            if (window.google.maps.geometry) {
                const newCenter = new window.google.maps.LatLng(locationLat.lat, locationLat.lng);
                const distance = window.google.maps.geometry.spherical.computeDistanceBetween(currentCenter, newCenter);
                const zoomLevel = Math.floor(16 - Math.log2(distance / 1000));

                map.panTo({ lat: locationLat.lat, lng: locationLat.lng });
                map.setZoom(zoomLevel > 0 ? zoomLevel : 1);
            } else {
                console.error('Google Maps Geometry library not loaded.');
            }
        }
    }, [mapInstance, locationLat]);

    // handle Flip BackCard 
    const handleBackCard = (id: any, lat: any, lng: any) => {
        const randomLat = Math.random() * 180 - 90; 
        const randomLng = Math.random() * 360 - 180;
        setDestination({ lat: parseFloat(lat), lng: parseFloat(lng) });
        setPath([
            { lat: mapCenter.lat, lng: mapCenter.lng },
            { lat: randomLat, lng: randomLng }, 
        ]);
        const cardIndex = flipCard.findIndex((card: any) => card.id === id);
        const updatedFlipCard = [...flipCard];
        updatedFlipCard[cardIndex].isFlip = !updatedFlipCard[cardIndex].isFlip;
        setFlipCard(updatedFlipCard);

        const newLat = parseFloat(lat);
        const newLng = parseFloat(lng);
        if (!isNaN(newLat) && !isNaN(newLng)) {
            setLocationLong({ lat: newLat, lng: newLng });
        } else {
            console.error('Invalid latitude or longitude values');
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = (listOrderModal:any) => {
        setModalOrder(listOrderModal)
        setShow(true);
    }

    return isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={100}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >

                {path.length > 0 && (
                    <>
                        <Polyline
                            path={path}
                            options={{
                                strokeColor: '#FF0000',
                                strokeOpacity: 1,
                                strokeWeight: 2,
                            }}
                        />
                        {truckPosition.lat !== 0 && (
                            <Marker
                                position={truckPosition}
                                icon={{
                                    url: 'https://maps.google.com/mapfiles/kml/shapes/truck.png', // Truck icon URL
                                    scaledSize: new window.google.maps.Size(40, 40), // Icon size
                                    origin: new window.google.maps.Point(0, 0),
                                    anchor: new window.google.maps.Point(20, 20),
                                }}
                            />
                        )}
                    </>
                )}

                {listOrders.map((listOrder: any) => (
                    <Marker
                        key={listOrder.id}
                        position={{
                            lat: parseFloat(listOrder.seller.address.latitude),
                            lng: parseFloat(listOrder.seller.address.longitude)
                        }}
                        onClick={() => {
                            setSelectedMarker(listOrder);
                            setInfoWindowContent(listOrder);
                        }}
                    />
                ))}

                {selectedMarker && (
                    <InfoWindow
                        position={{
                            lat: parseFloat(selectedMarker.seller.address.latitude),
                            lng: parseFloat(selectedMarker.seller.address.longitude)
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <div className="d-flex align-items-center flex-wrap mb-2">
                                <div className="">
                                    <img src={infoWindowContent?.seller?.image} alt="" className="img-fluid me-3" style={{ width: '50px' }} />
                                </div>
                                <div className="">
                                    <h4>{infoWindowContent?.seller?.name}</h4>
                                    <p>{infoWindowContent?.seller?.address.address_line1}</p>
                                </div>
                            </div>
                            <p className='mb-2'> <b>Email</b>: {infoWindowContent?.seller?.email}</p>
                            <p className='mb-2'> <b>phone</b>: {infoWindowContent?.seller?.phone}</p>
                            <p className='mb-2'> <b>Rating</b>: {infoWindowContent?.seller?.rating}</p>
                            <p className='mb-2'> <b>subTotal</b>: {infoWindowContent?.total}</p>
                        </div>
                    </InfoWindow>
                )}
                <> </>
            </GoogleMap>
            <>
                <div className="row mt-5">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            320: {
                              slidesPerView: 1,
                            },
                            576: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            992: {
                              slidesPerView: 4,
                            },
                            1300: {
                              slidesPerView: 4,
                            },
                            1440: {
                              slidesPerView: 4,
                            },
                            1660: {
                              slidesPerView: 6,
                            },
                          }}
                    >
                    {listOrders?.map((listOrder: any) => {
                        return (
                            <>
                                <SwiperSlide>
                                <div className="w-100" key={listOrder?.id}>
                                    <div className="logistics_scene scene--card">
                                        <div className={`${flipCard.find((card: any) => card?.id === listOrder.id)?.isFlip ? 'is-flipped' : ''} card h-100`}
                                        style={{border: 'none'}}
                                        onClick={() =>
                                            handleBackCard(listOrder?.id, listOrder?.seller?.address?.latitude, listOrder?.seller?.address?.longitude)
                                        }>
                                            <div className="card__face card__face_front rounded position-relative" style={{border: 'none'}}>
                                                <div className="d-flex flex-column h-100 justify-content-around">
                                                    <div className='position-absolute name-one'>
                                                        <h4 className='text-3d text-uppercase'>{listOrder?.seller?.name}</h4>
                                                    </div>
                                                    <div className="position-absolute name-two w-100">
                                                    <div className="px-3 d-flex justify-content-between">
                                                        <div className=''>
                                                            <p className='mb-0 text-start' style={{fontSize: '14px'}}>{listOrder?.seller?.address?.country}</p>
                                                            <p className='text-start' style={{fontSize: '14px'}}>Total: USD {listOrder?.total}</p>
                                                        </div>
                                                        <div onClick={(e)=> {
                                                            handleShow(listOrder),
                                                            e.stopPropagation()
                                                        }} >
                                                            <i className="bi bi-qr-code fs-3"></i>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card__face card__face_back rounded px-3" style={{border: 'none'}}>
                                            <div className="position-relative h-100 w-100">
                                                <div className="d-flex position-absolute back-one">
                                                    <img src={listOrder?.seller?.image} alt="" className="img-fluid rounded" style={{ width: '75px', objectFit: 'contain' }} />
                                                    <div className="ms-2 text-start">
                                                        <h6 className='text-3d'>{listOrder?.seller?.name}</h6>
                                                        <p style={{ fontSize: '12px' }}>{listOrder?.seller?.address?.address_line1}</p>
                                                    </div>
                                                </div>
                                                <div className="back-two position-absolute">
                                                <div className="d-flex align-items-center mt-3">
                                                    <h2 className='me-2 mb-0'> <i className="bi bi-house-gear-fill fs-5 text-white"></i> </h2>
                                                    <p className='mb-0' style={{fontSize: '10px'}}>{listOrder?.seller?.name}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <h2 className='me-2 mb-0'> <i className="bi bi-envelope fs-5 text-white"></i> </h2>
                                                    <p className='mb-0' style={{fontSize: '10px'}}>{listOrder?.seller?.email}</p>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <h2 className='me-2 mb-0'><i className="bi bi-telephone fs-5 text-white"></i> </h2>
                                                    <p className='mb-0' style={{fontSize: '10px'}}>{listOrder?.seller?.phone}</p>
                                                </div>
                                                <p className='text-start mb-0' style={{fontSize: '10px'}}>Farmer History</p>
                                                <div className="text-start mt-2">
                                                    <i className="bi bi-star"></i> <span style={{fontSize: '15px'}}>{listOrder?.seller?.rating ? listOrder?.seller?.rating : 'No Ratings'}</span> 
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            </>
                        )
                    })}
                    </Swiper>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <h6>Order Number: {modalOrder?.code}</h6>
                       <h6>Order Date: {modalOrder?.createdAt?.slice(0,10)}</h6>
                       <h6>Last Updated: {modalOrder?.updatedAt?.slice(0,10)}</h6>
                       <h6>Order Status: {modalOrder?.orderStatus}</h6>
                       <h6>Total Price: ${modalOrder?.total}</h6>
                       <h6>Sold By: {modalOrder?.seller?.name}</h6>
                       <h6>Seller rating: {modalOrder?.seller?.rating ? modalOrder?.seller?.rating : 'No Rating'}</h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    ) : <></>
}

export default Logistics