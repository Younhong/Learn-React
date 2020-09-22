import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      subject: {
        title: 'WEB',
        sub: 'World Wide Web'
      },
      welcome: {
        title: 'welcome',
        desc: 'Hello React'
      },
      contents: [
        {
          id: 1, title: 'HTML', desc: 'HTML is ...'
        },
        {
          id: 2, title: 'CSS', desc: 'CSS is ...'
        },
        {
          id: 3, title: 'Javascript', desc: 'Javascript is ...'
        }
      ]
    };
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={
            function(){
              alert('g');
            }.bind(this)
          }
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>{this.state.subject.title}
          </a></h1>
          {this.state.subject.sub}
        </header> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}>
        </Content>
      </div>
    );
  }
}

export default App;
