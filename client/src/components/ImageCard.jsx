import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Avatar } from "@mui/material";
import { DownloadRounded } from "@mui/icons-material";
import FileSaver from "file-saver";

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 340px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.bg_secondary};
  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
  }
`;

const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: opacity 0.3s ease;
  border-radius: 6px;
  justify-content: end;
  padding: 16px;

  ${Card}:hover & {
    opacity: 1;
  }
`;
const Prompt = styled.div`
  font-weight: 400px;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
`;
const Author = styled.div`
  font-weight: 600px;
  font-size: 14px;
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.white};
`;

// Utility to optimize Cloudinary URLs
function getOptimizedCloudinaryUrl(url, width = 400, height = 400) {
  if (!url?.includes("cloudinary.com")) return url;
  return url.replace(
    "/upload/",
    `/upload/w_${width},h_${height},c_fill,q_auto,f_auto/`
  );
}

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #222;
`;

const ImageCard = ({ item }) => {
  return (
    <Card>
      <ImageWrapper>
        <LazyLoadImage
          alt={item?.prompt}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", display: "block" }}
          src={getOptimizedCloudinaryUrl(item?.photo)}
          loading="lazy"
          effect="blur"
        />
      </ImageWrapper>
      <HoverOverlay>
        <Prompt>{item?.prompt.slice(0, 100)}...</Prompt>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Author>
            <Avatar sx={{ width: "32px", height: "32px" }}>
              {item?.name[0]}
            </Avatar>
            {item?.name}
          </Author>
          <DownloadRounded
            onClick={() => FileSaver.saveAs(item?.photo, "download.jpg")}
          />
        </div>
      </HoverOverlay>
    </Card>
  );
};

export default ImageCard;