import React from 'react'
import PopulatedSearchResults from '../containers/PopulatedSearchResults'
import SearchView from './SearchView'

const rightAlign = {

}

const ExportContentPane = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <SearchView />
            </div>
        </div>
             
        <div className="row">
            <div className="col-md-12">
                <PopulatedSearchResults/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <button type="export" className="btn btn-primary">Export</button>
            </div>
        </div>
    </div>
)

export default ExportContentPane
