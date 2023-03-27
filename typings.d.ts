export interface VideosSchema {
  items: Video[];
  kind: string;
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  regionCode: string;
}

export interface Video {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet: VideoSnippet;
}

export interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  default: {
    height: number;
    url: string;
    width: number;
  };
  high: {
    height: number;
    url: string;
    width: number;
  };
  medium: {
    height: number;
    url: string;
    width: number;
  };
}
