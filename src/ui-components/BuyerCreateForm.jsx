/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { createBuyer } from "../graphql/mutations";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BuyerCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    buyerType: "",
    name: "",
    profile: "",
    image: "",
    taxId: "",
    active: false,
    verified: false,
    phone: "",
    email: "",
    website: "",
    address: "",
    attributes: "",
    images: "",
    documents: "",
    categories: [],
    rating: "",
    age: "",
    gender: "",
  };
  const [buyerType, setBuyerType] = React.useState(initialValues.buyerType);
  const [name, setName] = React.useState(initialValues.name);
  const [profile, setProfile] = React.useState(initialValues.profile);
  const [image, setImage] = React.useState(initialValues.image);
  const [taxId, setTaxId] = React.useState(initialValues.taxId);
  const [active, setActive] = React.useState(initialValues.active);
  const [verified, setVerified] = React.useState(initialValues.verified);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [website, setWebsite] = React.useState(initialValues.website);
  const [address, setAddress] = React.useState(initialValues.address);
  const [attributes, setAttributes] = React.useState(initialValues.attributes);
  const [images, setImages] = React.useState(initialValues.images);
  const [documents, setDocuments] = React.useState(initialValues.documents);
  const [categories, setCategories] = React.useState(initialValues.categories);
  const [rating, setRating] = React.useState(initialValues.rating);
  const [age, setAge] = React.useState(initialValues.age);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBuyerType(initialValues.buyerType);
    setName(initialValues.name);
    setProfile(initialValues.profile);
    setImage(initialValues.image);
    setTaxId(initialValues.taxId);
    setActive(initialValues.active);
    setVerified(initialValues.verified);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setWebsite(initialValues.website);
    setAddress(initialValues.address);
    setAttributes(initialValues.attributes);
    setImages(initialValues.images);
    setDocuments(initialValues.documents);
    setCategories(initialValues.categories);
    setCurrentCategoriesValue("");
    setRating(initialValues.rating);
    setAge(initialValues.age);
    setGender(initialValues.gender);
    setErrors({});
  };
  const [currentCategoriesValue, setCurrentCategoriesValue] =
    React.useState("");
  const categoriesRef = React.createRef();
  const validations = {
    buyerType: [],
    name: [],
    profile: [],
    image: [{ type: "URL" }],
    taxId: [],
    active: [],
    verified: [],
    phone: [{ type: "Phone" }],
    email: [{ type: "Email" }],
    website: [{ type: "URL" }],
    address: [{ type: "JSON" }],
    attributes: [{ type: "JSON" }],
    images: [{ type: "JSON" }],
    documents: [{ type: "JSON" }],
    categories: [],
    rating: [],
    age: [],
    gender: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          buyerType,
          name,
          profile,
          image,
          taxId,
          active,
          verified,
          phone,
          email,
          website,
          address,
          attributes,
          images,
          documents,
          categories,
          rating,
          age,
          gender,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createBuyer.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BuyerCreateForm")}
      {...rest}
    >
      <SelectField
        label="Buyer type"
        placeholder="Please select an option"
        isDisabled={false}
        value={buyerType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType: value,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.buyerType ?? value;
          }
          if (errors.buyerType?.hasError) {
            runValidationTasks("buyerType", value);
          }
          setBuyerType(value);
        }}
        onBlur={() => runValidationTasks("buyerType", buyerType)}
        errorMessage={errors.buyerType?.errorMessage}
        hasError={errors.buyerType?.hasError}
        {...getOverrideProps(overrides, "buyerType")}
      >
        <option
          children="Online retailer"
          value="ONLINE_RETAILER"
          {...getOverrideProps(overrides, "buyerTypeoption0")}
        ></option>
        <option
          children="Offline retailer"
          value="OFFLINE_RETAILER"
          {...getOverrideProps(overrides, "buyerTypeoption1")}
        ></option>
        <option
          children="Manufacturer"
          value="MANUFACTURER"
          {...getOverrideProps(overrides, "buyerTypeoption2")}
        ></option>
        <option
          children="Wholesaler"
          value="WHOLESALER"
          {...getOverrideProps(overrides, "buyerTypeoption3")}
        ></option>
        <option
          children="Service provider"
          value="SERVICE_PROVIDER"
          {...getOverrideProps(overrides, "buyerTypeoption4")}
        ></option>
        <option
          children="Individual"
          value="INDIVIDUAL"
          {...getOverrideProps(overrides, "buyerTypeoption5")}
        ></option>
        <option
          children="Others"
          value="OTHERS"
          {...getOverrideProps(overrides, "buyerTypeoption6")}
        ></option>
      </SelectField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name: value,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Profile"
        isRequired={false}
        isReadOnly={false}
        value={profile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile: value,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.profile ?? value;
          }
          if (errors.profile?.hasError) {
            runValidationTasks("profile", value);
          }
          setProfile(value);
        }}
        onBlur={() => runValidationTasks("profile", profile)}
        errorMessage={errors.profile?.errorMessage}
        hasError={errors.profile?.hasError}
        {...getOverrideProps(overrides, "profile")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image: value,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Tax id"
        isRequired={false}
        isReadOnly={false}
        value={taxId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId: value,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.taxId ?? value;
          }
          if (errors.taxId?.hasError) {
            runValidationTasks("taxId", value);
          }
          setTaxId(value);
        }}
        onBlur={() => runValidationTasks("taxId", taxId)}
        errorMessage={errors.taxId?.errorMessage}
        hasError={errors.taxId?.hasError}
        {...getOverrideProps(overrides, "taxId")}
      ></TextField>
      <SwitchField
        label="Active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active: value,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.active ?? value;
          }
          if (errors.active?.hasError) {
            runValidationTasks("active", value);
          }
          setActive(value);
        }}
        onBlur={() => runValidationTasks("active", active)}
        errorMessage={errors.active?.errorMessage}
        hasError={errors.active?.hasError}
        {...getOverrideProps(overrides, "active")}
      ></SwitchField>
      <SwitchField
        label="Verified"
        defaultChecked={false}
        isDisabled={false}
        isChecked={verified}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified: value,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.verified ?? value;
          }
          if (errors.verified?.hasError) {
            runValidationTasks("verified", value);
          }
          setVerified(value);
        }}
        onBlur={() => runValidationTasks("verified", verified)}
        errorMessage={errors.verified?.errorMessage}
        hasError={errors.verified?.hasError}
        {...getOverrideProps(overrides, "verified")}
      ></SwitchField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone: value,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email: value,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website: value,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextAreaField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address: value,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextAreaField>
      <TextAreaField
        label="Attributes"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes: value,
              images,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.attributes ?? value;
          }
          if (errors.attributes?.hasError) {
            runValidationTasks("attributes", value);
          }
          setAttributes(value);
        }}
        onBlur={() => runValidationTasks("attributes", attributes)}
        errorMessage={errors.attributes?.errorMessage}
        hasError={errors.attributes?.hasError}
        {...getOverrideProps(overrides, "attributes")}
      ></TextAreaField>
      <TextAreaField
        label="Images"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images: value,
              documents,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.images ?? value;
          }
          if (errors.images?.hasError) {
            runValidationTasks("images", value);
          }
          setImages(value);
        }}
        onBlur={() => runValidationTasks("images", images)}
        errorMessage={errors.images?.errorMessage}
        hasError={errors.images?.hasError}
        {...getOverrideProps(overrides, "images")}
      ></TextAreaField>
      <TextAreaField
        label="Documents"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents: value,
              categories,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.documents ?? value;
          }
          if (errors.documents?.hasError) {
            runValidationTasks("documents", value);
          }
          setDocuments(value);
        }}
        onBlur={() => runValidationTasks("documents", documents)}
        errorMessage={errors.documents?.errorMessage}
        hasError={errors.documents?.hasError}
        {...getOverrideProps(overrides, "documents")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories: values,
              rating,
              age,
              gender,
            };
            const result = onChange(modelFields);
            values = result?.categories ?? values;
          }
          setCategories(values);
          setCurrentCategoriesValue("");
        }}
        currentFieldValue={currentCategoriesValue}
        label={"Categories"}
        items={categories}
        hasError={errors?.categories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("categories", currentCategoriesValue)
        }
        errorMessage={errors?.categories?.errorMessage}
        setFieldValue={setCurrentCategoriesValue}
        inputFieldRef={categoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Categories"
          isRequired={false}
          isReadOnly={false}
          value={currentCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.categories?.hasError) {
              runValidationTasks("categories", value);
            }
            setCurrentCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("categories", currentCategoriesValue)
          }
          errorMessage={errors.categories?.errorMessage}
          hasError={errors.categories?.hasError}
          ref={categoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "categories")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={rating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating: value,
              age,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.rating ?? value;
          }
          if (errors.rating?.hasError) {
            runValidationTasks("rating", value);
          }
          setRating(value);
        }}
        onBlur={() => runValidationTasks("rating", rating)}
        errorMessage={errors.rating?.errorMessage}
        hasError={errors.rating?.hasError}
        {...getOverrideProps(overrides, "rating")}
      ></TextField>
      <TextField
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age: value,
              gender,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <SelectField
        label="Gender"
        placeholder="Please select an option"
        isDisabled={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyerType,
              name,
              profile,
              image,
              taxId,
              active,
              verified,
              phone,
              email,
              website,
              address,
              attributes,
              images,
              documents,
              categories,
              rating,
              age,
              gender: value,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      >
        <option
          children="Male"
          value="MALE"
          {...getOverrideProps(overrides, "genderoption0")}
        ></option>
        <option
          children="Female"
          value="FEMALE"
          {...getOverrideProps(overrides, "genderoption1")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "genderoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
