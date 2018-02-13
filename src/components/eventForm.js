import React, { Component } from 'react';
import {Form, Input, Select, Button, DatePicker} from 'antd';

// import css
import './eventform.css'
export default class EventForm extends Component {
    render() {

        // get form item
        const Formitem = Form.Item;
        // get textarea
        const {TextArea} = Input;
        return (
           <div>
               <Form className="event-form">
               {/* Name field */}
                   <Formitem>
                       <Input placeholder="Movie Name" />
                   </Formitem>
                   <Formitem>

                       {/* Description */}
                   <TextArea name="description"
                    rows={4} 
                    size="large" 
                    placeholder="Enter a description to let other better understand"/>
                   </Formitem>

                    {/* Date Picker */}
                    <Formitem>
                    <DatePicker/>
                    </Formitem>

                    {/* Submit Button */}
                   <Button type="primary" htmlType="submit">Create</Button>
               </Form>
           </div> 
        );
    }
}