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
  statistics: {
    subscriberCount: Number;
  };
}

export interface VideoSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  title: string;
  thumbnails: Thumbnails;
  title?: string;
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

export interface FootageSchema {
  items: Footage[];
  kind: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
}

export interface Footage {
  contentDetails: Object;
  id: string;
  snippet: VideoSnippet;
  statistics: {
    likeCount: string;
    viewCount: string;
  };
}
