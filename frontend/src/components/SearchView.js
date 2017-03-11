import React from 'react'

const rightPadding5 = {
    paddingRight: '5px'
}

const noPadding = {
    padding: '0px'
}

const topPadding15 = {
    paddingTop: '15px'
}

const SearchView = () => (
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title">Enter the criteria to search for the records to export</h3>
        </div>
        <div className="panel panel-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        Syllable:
                        <div className="row">
                            <div className="col-md-6">
                                <select className="form-control" id="gender">
                                    <option>--</option>
                                    <option>B</option>
                                    <option>P</option>
                                    <option>M</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control" id="gender">
                                    <option>--</option>
                                    <option>a</option>
                                    <option>o</option>
                                    <option>e</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        Recorder:
                        <input type="text" className="form-control" id="username" placeholder="Name"></input>
                    </div>
                    <div className="col-md-1">
                        Gender:
                        <select className="form-control" id="gender">
                            <option>--</option>
                            <option>M</option>
                            <option>F</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        Age:
                        <div className="row">
                            <div className="col-md-5" style={rightPadding5}>
                                <input type="text" className="form-control" id="minAge" placeholder="From"></input> 
                            </div>
                            <div className="col-md-1" style={noPadding}>
                                <h5>－</h5>
                            </div>
                            <div className="col-md-5">
                                <input type="text" className="form-control" id="maxAge" placeholder="To"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        Min. Validation Number:
                        <input type="text" className="form-control" id="minCorrect" placeholder="Number"></input>
                    </div>
                    {
                        // <div className="col-md-2">
                        //     Valid Percentage(%):
                        //     <div className="row">
                        //         <div className="col-md-5" style={rightPadding5}>
                        //             <input type="text" className="form-control" id="minVaildPercent" placeholder="Percentage"></input> 
                        //         </div>
                        //         <div className="col-md-1" style={noPadding}>
                        //             <h5>－</h5>
                        //         </div>
                        //         <div className="col-md-5">
                        //             <input type="text" className="form-control" id="maxVaildPercent" placeholder="To"></input>
                        //         </div>
                        //     </div>
                        // </div>
                    }
                    <div className="col-md-2">
                        Valid Percentage(%):
                        <input type="text" className="form-control" id="vaildPercent" placeholder="Percentage"></input> 
                    </div>
                    <div className="col-md-1" style={topPadding15}>
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default SearchView
