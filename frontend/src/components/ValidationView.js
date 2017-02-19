// The main validation content, including image, word, player, button list
import React, { PropTypes } from 'react'

// React way of defining styles - use inner styles
const btnStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%'
}

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const wordStyle = {
    textAlign: 'center'
}

const audioStyle = {
    width: '100%',
    marginBottom: '1em'
}

const ValidationView = ({ sample, onValidate }) => (
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title">Validation</h3>
        </div>
        <div className="panel panel-body">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <img src={'http://localhost/storage/img/'+sample.img} alt={sample.word} style={imgStyle} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3 style={wordStyle}>{sample.word}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <audio controls style={audioStyle} src={'http://localhost/storage/samples/'+sample.sample} preload="none">
                        Your browser does not support the audio tag
                    </audio>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <a href="#" className="btn btn-primary" style={btnStyle} onClick={() => onValidate('correct')}>
                        <span className="glyphicon glyphicon-ok-sign" aria-hidden="true"></span> 
                        Correct
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="#" className="btn btn-danger" style={btnStyle} onClick={() => onValidate('incorrect')}>
                        <span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> 
                        Incorrect
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="#" className="btn btn-warning" style={btnStyle} onClick={() => onValidate('unsure')}>
                        <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span> 
                        Unsure 
                    </a>
                </div>
                <div className="col-md-3">
                    <a href="#" className="btn btn-info" style={btnStyle} onClick={() => onValidate('noise')}>
                        <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> 
                        Noise 
                    </a>
                </div>
            </div>
        </div>
    </div>
)

ValidationView.propTypes = {
    sample: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sample: PropTypes.string.isRequired,
        word: PropTypes.string.isRequired,
        img: PropTypes.string.required,
    }).isRequired,
    onValidate: PropTypes.func.isRequired
}

export default ValidationView
