import React from 'react'
import { Field, reduxForm } from 'redux-form'

const rightPadding5 = {
    paddingRight: '5px'
}

const noPadding = {
    padding: '0px'
}

const topPadding15 = {
    paddingTop: '15px'
}
const renderVowel = () => (
    <select className="form-control" id="vowel">
        <option></option>
        <option>B</option>
        <option>P</option>
        <option>M</option>
    </select>
)
const renderConsonant = () => (
    <select className="form-control" id="consonant">
        <option></option>
        <option>a</option>
        <option>o</option>
        <option>e</option>
    </select>
)
const renderGender = () => (
    <select className="form-control" id="gender">
        <option></option>
        <option>M</option>
        <option>F</option>
    </select>
)


const SearchViewComponent = ({ handleSubmit }) => (
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title">Enter the criteria to search for the records to export</h3>
        </div>
        <div className="panel panel-body">
            <form onSubmit={ handleSubmit } className="form-horizontal">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            Syllable:
                            <div className="row">
                                <div className="col-md-6">
                                    <Field name="vowel" component={renderVowel} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <Field name="consonant" component={renderConsonant} className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            Recorder:
                            <Field name="username" component="input" className="form-control" placeholder="Name" type="text" />
                        </div>
                        <div className="col-md-1">
                            Gender:
                            <Field name="gender" component={renderGender} className="form-control" />
                        </div>
                        <div className="col-md-2">
                            Age:
                            <div className="row">
                                <div className="col-md-5" style={rightPadding5}>
                                    <Field name="minAge" component="input" className="form-control" placeholder="From" type="text" />
                                </div>
                                <div className="col-md-1" style={noPadding}>
                                    <h5>－</h5>
                                </div>
                                <div className="col-md-5">
                                    <Field name="maxAge" component="input" className="form-control" placeholder="To" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            Min. Validation Number:
                            <Field name="minCorrect" component="input" className="form-control" placeholder="Number" type="text" />
                        </div>
                        <div className="col-md-2">
                            Valid Percentage(%):
                            <Field name="vaildPercent" component="input" className="form-control" placeholder="Percentage" type="text" />
                        </div>
                        <div className="col-md-1" style={topPadding15}>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
const SearchView = reduxForm({
    form: 'search'
})(SearchViewComponent)

export default SearchView
