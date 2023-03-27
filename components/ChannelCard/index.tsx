import React from "react";

// interfaces
import { Video } from "@/typings";

// comp
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// const
import { demoProfilePicture } from "@/utils/constants";

// next
import Link from "next/link";

type Props = {
  channelDetail: Video;
};

const ChannelCard = ({ channelDetail }: Props) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" }}>
      <Link href={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />

          <Typography variant="h6">{channelDetail?.snippet?.title}</Typography>
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
