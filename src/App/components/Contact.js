import './Components.css';
const Contact = () => { return (
<form className = "mx-auto form placeholdertext">
<h3 className = "placeholdertext">Contact </h3>
<label> 
    email:
<input className ="email-box"  />
</label>
<br />
<label> 
    message: 
<input className ="message-box" />
</label>
<br />
<button>Submit</button>
</form>
); }

export default Contact; 