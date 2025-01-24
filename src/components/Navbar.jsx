import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './Login.jsx';

const Button = () => {
  return (
    <Router>
      <StyledWrapper>
        <div className="nav">
          <div className="container">
            <Link to="/" className="btn">Home</Link>
            <Link to="/contact" className="btn">Contact</Link>
            <Link to="/about" className="btn">About</Link>
            <Link to="/login" className="btn">Login</Link>
            <svg
              className="outline"
              overflow="visible"
              width={400}
              height={60}
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="rect"
                pathLength={100}
                x={0}
                y={0}
                width={750}
                height={60}
                fill="transparent"
                strokeWidth={5}
              />
            </svg>
          </div>
        </div>
        {/* Define Routes */}
        <Routes>
          <Route 
            path="/login" 
            element={
              <CenteredContainer>
                <Login />
              </CenteredContainer>
            } 
          />
        </Routes>
      </StyledWrapper>
    </Router>
  );
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  .outline {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .rect {
    stroke-dashoffset: 5;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s;
    stroke: #fff;
  }

  .nav {
    position: relative;
    width: 750px;
    height: 60px;
  }

  .container:hover .outline .rect {
    transition: 999999s;
    stroke-dashoffset: 1;
    stroke-dasharray: 0;
  }

  .container {
    position: absolute;
    inset: 0;
    background: #bef6;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
  }

  .btn {
    padding: 0.5em 1.5em;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    transition: 0.1s;
  }

  .btn:hover {
    background: #fff3;
  }

  .btn:nth-child(1):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 2 8 73.3 8 10.7;
  }

  .btn:nth-child(2):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
  }

  .btn:nth-child(3):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
  }

  .btn:nth-child(4):hover ~ svg .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
  }

  .btn:hover ~ .outline .rect {
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0 10 40 10 40;
    transition: 0.5s !important;
  }
`;

export default Button;
