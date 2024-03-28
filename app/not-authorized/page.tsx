import PublicHeader from 'apps/admin/components/public-header/PublicHeader'
import React from 'react'

export default function page() {
  return (<>
        <PublicHeader/>
      <div className='d-flex flex-column  justify-content-center  align-items-center bg-gray' style={{height:"70vh"}}>
          <h2 className='display-3 text-gray'>No Access</h2>
      </div>
  </>
  )
}
