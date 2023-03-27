import React from "react";

// comp
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "..";

// interfaces
import { Video } from "@/typings";

type Props = {
  videos: Video[];
};

const Videos = ({ videos }: Props) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((video: Video, index) => (
        <Box key={video.snippet.title}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
