import React, {Component} from 'react';
import {FaDolly, FaRedo, FaDollarSign} from "react-icons/all";
import styled from "styled-components/native/dist/styled-components.native.esm";

export default class Featured extends Component {
    state = {
        services: [
            {
                id: 1,
                icon: <FaDolly/>,
                title: 'free shipping',
                text: "Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Commodi, quae."
            },
            {
                id: 2,
                icon: <FaRedo/>,
                title: '30 days return policy',
                text: "Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Commodi, quae."
            },
            {
                id: 3,
                icon: <FaDollarSign/>,
                title: 'secured payment',
                text: "Lorem ipsum dolor sit amet," +
                    " consectetur adipisicing elit. Commodi, quae."
            }
        ]
    }

    render() {
        return <ServicesWrapper className="py-5">
            <div className="container">
                <div className="row"></div>
            </div>
        </ServicesWrapper>
    }
}

const ServicesWrapper = styled.section`
  background: rgba(95,183,234,0.5);
  .service-icon{
  font-size: 2.5em;
  color: var(--primaryColor);
  }
  p{
  color: var(--darkGrey);
  }
`