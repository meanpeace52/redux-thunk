import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button,FormGroup,Row,Col } from 'reactstrap';
import renderField from './renderField';


const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = 'Required';
  }
  return errors;
};
class SearchForm extends Component {
  handleInitialize () {
    // TODO: Manage properly user not available case (redux form reason ?)
    //if (this.props.user.firstname === undefined) return;
    const {initValues} = this.props;
    const initData = {
      //'telephone': this.props.user.telephone === undefined ? '' : this.props.user.telephone.toString()
      ...initValues
    };
    this.props.initialize(initData);
  }
  componentDidMount () {
    this.handleInitialize();
  }
  render () {
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <Row>  
        <Col md={'auto'}>
          <Field
            name="keyword"
            component={renderField}
            type="text"
            label="Keyword"
            placeholder="Enter a keyword"
            //{...keyword}
          />
        </Col>
        
        <Col md={'auto'}>   
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </Col>
      </Row>  
      </form>
    );
  }
}

export default reduxForm({
  form: 'searchForm',
  validate,
  //fields: ['keyword']
})(SearchForm);
