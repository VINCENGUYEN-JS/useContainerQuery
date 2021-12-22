# use-container-query

When you need to do logic based on the size of an element. Uses the ResizeObserver API. It takes a value and will return if that value is less than or equal to it

# Usage

const Div = React.forwardRef(props,ref)=>{
const [node,setRef] = React.useState(null)
const matches = useContainerQuery(node,320)
// do something with matches
return <div ref={setRef} {...props}>
}

const Div = React.forwardRef(props,ref)=>{
const [node,setRef] = React.useState(null)
const matches = useContainerQuery(node, 320, 640)
// do something with matches
return <div ref={setRef} {...props}>
}
