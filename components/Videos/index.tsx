import React from "react";

// comp
import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "..";

// interfaces
import { Video } from "@/typings";

type Props = {
  videos: Video[];
  direction?: boolean;
};

const Videos = ({ videos, direction }: Props) => {
  if (!videos.length) return <Typography variant="h4">Loading...</Typography>;

  return (
    <Stack
      direction={direction ? "column" : "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((video: Video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
