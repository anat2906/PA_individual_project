import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import Video from "../video/Video";
import Hashtag from "../hashtag/Hashtag";

class Sidebar extends Component {
  render() {
    const StyledSidebar = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1em 1.5em;
      border: 1px solid ${colors.shadow};
      box-shadow: 1px 1px 0px ${colors.shadow};
    `;
    const Events = styled.ul`
      list-style-type: none;
      font-family: "PT Mono";
      font-size: 18px;
      margin: 0;
      padding: 0;
    `;
    const SectionTitle = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
      img {
        width: 27px;
        height: 27px;
      }
      h5 {
        margin-right: 0.5em;
        margin-bottom: 0;
      }
    `;
    const Event = styled.li`
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2em;
      a {
        font-family: "PT Mono";
        font-weight: 700;
        margin-right: 0.5em;
        text-decoration: underline !important;
      }
      span {
        font-family: "PT Mono";
      }
    `;

    return (
      <>
        <StyledSidebar>
          <div className="mb-4">
            <SectionTitle>
              <h5>Upcoming Events</h5>
              <img src="https://img.icons8.com/carbon-copy/100/000000/calendar.png" />
            </SectionTitle>
            <Events>
              <Event>
                <a>Holy JS</a> <span>25/05/2019</span>
              </Event>
              <Event>
                <a>Highload ++</a> <span>25/05/2019</span>
              </Event>
              <Event>
                <a>PyConf 2019</a> <span>25/05/2019</span>
              </Event>
              <Event>
                <a>Holy JS</a> <span>25/05/2019</span>
              </Event>
              <Event>
                <a>Holy JS</a> <span>25/05/2019</span>
              </Event>
            </Events>
          </div>
          <div className="mb-4">
            <SectionTitle>
              <h5>Trending Topics</h5>
              <img src="https://img.icons8.com/carbon-copy/100/000000/news.png" />
            </SectionTitle>
            <Hashtag>python</Hashtag>
            <Hashtag>react</Hashtag>
            <Hashtag>go</Hashtag>
            <Hashtag>python</Hashtag>
            <Hashtag>react</Hashtag>
            <Hashtag>AI</Hashtag>
            <Hashtag>Highload2019</Hashtag>
            <Hashtag>accessibility</Hashtag>
            <Hashtag>react_native</Hashtag>
            <Hashtag>vue</Hashtag>
            <Hashtag>data_science</Hashtag>
          </div>
          <div className="mb-4">
            <SectionTitle>
              <h5>Watching Now</h5>
              <img src="https://img.icons8.com/carbon-copy/100/000000/unchecked-circle.png" />
            </SectionTitle>
              <Video />
          </div>
        </StyledSidebar>
        <StyledSidebar className="mt-3">
          <a>About</a>
          <a>Contacts</a>
          <div className="d-flex">
            <a />
          </div>
        </StyledSidebar>
      </>
    );
  }
}

export default Sidebar;
