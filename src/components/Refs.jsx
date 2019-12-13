import React from 'react'

class CustomInput extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    handleFocus = e => {
        console.log(this.myRef.current)
        this.myRef.current.focus()
    }

    render() {
        return <input type="text" ref={this.myRef} />
    }
}

class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.myInputs = []
    }

    userList = [
        {
            name: 'tom',
            age: 26
        },
        {
            name: 'jack',
            age: 27
        },
    ]

    focus = index => {
        this.myInputs[index].focus()

    }

    onChange = () => {

    }

    render() {
        return <div>
            {
                this.userList.map(({ name, age }, index) => <div key={index}>
                    <input type="text" ref={ref => (this.myInputs[index] = ref)} value={name} onChange={this.onChange} />
                    <button onClick={e => this.focus(index)}>focus</button>
                </div>)
            }
        </div>
    }
}

export default Demo