const _initialSamples = [
	{
    vowel:'',
    consonant:'',
    recorder:'',
    gender:'',
    age:'',
    NH:'',
    timestamp:'',
    minCorrect:'',
    validPercent:'',
    Url:''
	}
]

const search = (_results=_initialSamples, action) => {
    switch (action.type) {
        case 'DISPLAY_RESULTS':
            return action.response
        default:
            return _results
    }
}

export default search
