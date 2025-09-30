import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { GetPosts } from "../api";
import Loader from "../components/Loader";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  background: linear-gradient(90deg, #8a2be2 0%, #9d4edd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`;

const CardWrapper = styled.div`
  display: grid;
  gap: 24px;
  width: 100%;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 900px) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 600px) and (max-width: 899px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 599px) {
    grid-template-columns: 1fr;
  }
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    await GetPosts()
      .then((res) => {
        setLoading(false);
        // Reverse once here when setting state
        const reversedPosts = res?.data?.data ? [...res.data.data].reverse() : [];
        setPosts(reversedPosts);
        setFilteredPosts(reversedPosts);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  //Search
  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts);
      return;
    }

    const SearchFilteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());
      const authorMatch = post?.name
        ?.toLowerCase()
        .includes(search.toString().toLowerCase());

      return promptMatch || authorMatch;
    });

    setFilteredPosts(SearchFilteredPosts);
  }, [posts, search]);

  return (
    <Container>
      <Headline>
        Explore More in the Community!
        <Span>{`</Created with Ai>`}</Span>
      </Headline>
      <SearchBar search={search} setSearch={setSearch} />
      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <Loader/>
        ) : (
          <CardWrapper>
            {filteredPosts.length === 0 ? (
             <div style={{textAlign:"center"}}>No Posts Found</div>
            ) : (
              <>
                {filteredPosts.map((item) => (
                  <ImageCard key={item._id} item={item} />
                ))}
              </>
            )}
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  );
};

export default Home;