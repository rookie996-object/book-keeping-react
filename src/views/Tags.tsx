import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Icon from "../components/Icons";
import { Link } from "react-router-dom";
import { useTags } from "hook/useTags";

const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
    }
  }
`;

const TopBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 28px;
  padding: 16px;
  background: #99ccff;
  color: #ffffff;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

function Tags() {
  const { tags } = useTags();

  return (
    <Layout>
      <TopBar>编辑标签</TopBar>
      <TagList>
        {tags.map((tag) => (
          <li key={tag.id}>
            <Link to={"/tags/" + tag.id}>
              <span>{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center />
    </Layout>
  );
}

export default Tags;
