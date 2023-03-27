import React from "react";

// interfaces
import { Video } from "@/typings";

// comp
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import Link from "next/link";
import { CheckCircle } from "@mui/icons-material";

// const
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "@/utils/constants";

type Props = {
  video: Video;
};

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: Props) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%", boxShadow: "none", borderRadius: 0 },
      }}
    >
      <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          sx={{ width: "100%", height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          href={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
