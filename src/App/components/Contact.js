import './Components.css';
const Contact = () => { return (
<form>
<p className = "placeholdertext"> this is contact </p>
<label> 
    email:
<input/>
</label>
<br />
<label> 
    message: 
<input/>
</label>
<br />
<button>Submit</button>
</form>
); }

export default Contact; 