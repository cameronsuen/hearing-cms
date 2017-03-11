import React from 'react'

const SearchResultsView = ({records}) => {
    const items = records.map(record => (
        <tr>
            <td>{record.vowel}</td>
            <td>{record.consonant}</td>
            <td>{record.recorder}</td>
            <td>{record.gender}</td>
            <td>{record.age}</td>
            <td>{record.NH}</td>
            <td>{record.timestamp}</td>
            <td>{record.minCorrect}</td>
            <td>{record.validPercent}</td>
        </tr>
    ))

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-hover ">
                        <thead>
                            <tr>
                                <th>Vowel</th>
                                <th>Consonant</th>
                                <th>Recorder</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>NH</th>
                                <th>Timestamp</th>
                                <th>Validation Number</th>
                                <th>Valid Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsView
