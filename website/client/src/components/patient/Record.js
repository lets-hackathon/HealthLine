import React,{Fragment} from 'react'
import SideBar from '../layout/SideBar'
const Record = () => {
    return (
        <Fragment>
            {/* <h1>This is Record page</h1> */}

            {/* display of medical records */}

            {/*
            form submittal 
            date of addition
            purpose of report 
             summary
            submitting pdfs to medical record */}

<div className="page-content">
    <SideBar/>
      {/* Removable thumbnails */}
      <div className="card">
        <div className="card-header header-elements-inline">
          <h5 className="card-title">Removable thumbnails</h5>
          <div className="header-elements">
            <div className="list-icons">
              <a className="list-icons-item" data-action="collapse" />
              <a className="list-icons-item" data-action="reload" />
              <a className="list-icons-item" data-action="remove" />
            </div>
          </div>
        </div>
        <div className="card-body">
          {/* <p className="mb-3">Example of dropzone file uploader with <code>remove</code> thumbnail option applied to every thumbnail in the preview by setting <code>addRemoveLinks</code> option to <code>true</code>. This will add a link to every file preview to remove or cancel (if already uploading) the file. The <code>dictCancelUpload</code>, <code>dictCancelUploadConfirmation</code> and <code>dictRemoveFile</code> options are used for the wording.</p> */}
          {/* <p className="font-weight-semibold">Removable thumbnails example:</p> */}
          <form action="#" className="dropzone" id="dropzone_remove"></form>
        </div>
      </div>
      {/* /removable thumbnails */}
      </div>
            </Fragment>
    )
}

export default Record
