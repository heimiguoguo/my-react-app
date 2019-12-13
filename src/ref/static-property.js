class Test{
    // static defaultProps = {
    //     name: 'tom'
    // }
    constructor(props){
        // Test没有父类,不能调用super()
        // super(props)
        console.log('Test constructed')
        console.log(props)
    }
}
// Node.js目前不支持用static定义静态属性
// 需要用以下方式定义static属性:
// 类名.属性名
Test.defaultProps = {
    name: 'tom'
}

new Test()



let a1 = [1,2]

let a2 = [3]

// Node.js暂不支持对象展开运算符
let a3 = Object.assign(...a1,...a2)
console.log(a3)
console.log(a1)