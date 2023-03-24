import React from "react";

// comp
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "..";

type Props = {
  videos: Video[];
};

type Video = {
  id: {
    videoId: string;
    channelId: string;
  };
};

const Videos = ({ videos }: Props) => {
  console.log(videos);
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.length <= 0 && <div>No data</div>}

      {videos.length > 0 &&
        videos.map((video: Video, index) => (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))}
    </Stack>
  );
};

export default Videos;
