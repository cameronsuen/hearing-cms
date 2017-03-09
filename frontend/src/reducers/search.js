const _initialSamples = [
	{
    userName:'Pete',
    gender:'M',
    age:'10',
    vaildSampleNum:'',
    fileUrl:'/123.wav'

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
