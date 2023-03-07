const initial = `
This is a paragraph
**This is a bolded text**
> Block Quote
# Header
## Subheader
- list item
- list item2
[Checkout my website](https://www.linkedin.com/in/anil-ilaga/)
Inline \`<div></div>\`

\`\`\`
    let x = 1;
    let z = 5;
    let c = z+x;
\`\`\`

![Tux, the Linux mascot](/assets/icon.png)
`




class TextAreas extends React.Component {
    constructor(props){
        super(props)
        this.state = {
               input: initial
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
            input: event.target.value
        })
    }

    render(){
        const inp = this.state.input;
        const markdown = marked.parse(this.state.input);

        return(
                <div>
                    <h2 className="text-center m-4">MarkDown Converter</h2>
                    <div className="row">
                        <div className="col-6">
                            <h5 className="text-center">Enter Your Input</h5>
                            <textarea className="form-control" rows="15" id="editor" onChange={this.handleChange} value={inp}></textarea>
                        </div>
                        <div className ="col-6">
                            <h5 className="text-center">Output</h5>
                            <div id="preview" className="preview rounded" dangerouslySetInnerHTML={{__html:markdown}}></div>
                        </div>
                    </div>
                </div>
        )
    }
}

const rootNode = document.getElementById('text-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(TextAreas));