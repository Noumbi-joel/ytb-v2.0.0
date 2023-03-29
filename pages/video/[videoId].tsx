import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// player
import ReactPlayer from "react-player";

// comp
import { Box, Stack, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// utils
import { fetchFromAPI } from "@/utils/fetchFromAPI";

// interfaces
import { Footage, FootageSchema, Video, VideosSchema } from "@/typings";
import Head from "next/head";
import { Videos } from "@/components";

export default function VideoDetails() {
  const [videoDetail, setVideoDetail] = useState<Footage>();
  const [videos, setVideos] = useState<Video[]>([]);

  const {
    query: { videoId },
  } = useRouter();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data: FootageSchema) => setVideoDetail(data.items[0]))
      .catch((err) => alert("ERROR: " + err?.message));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`)
      .then((data: VideosSchema) => setVideos(data.items))
      .catch((err) => alert("ERROR: " + err?.message));
  }, [videoId]);

  return (
    <>
      <Head>
        <title>Youtube-Clone | {videoDetail?.snippet?.channelTitle}</title>
        <meta name="description" content="Generated by create @nkjy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box
              sx={{
                width: "100%",
                position: "sticky",
                top: "86px",
                overFlowY: "auto",
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {videoDetail?.snippet?.title}
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link href={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Typography variant="h6" color="#fff">
                    {videoDetail?.snippet?.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.7 }}
                    color="#fff"
                  >
                    {parseInt(
                      videoDetail?.statistics?.viewCount!
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ opacity: 0.7 }}
                    color="#fff"
                  >
                    {parseInt(
                      videoDetail?.statistics?.likeCount!
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            alignItems="center"
            justifyContent="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
}