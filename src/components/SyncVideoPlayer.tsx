import type { CSSProperties } from 'react';
import { type FC } from 'react';

interface SyncVideoPlayerProps {
  videos: {
    src: string;
    title?: string;
  }[];
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  style?: CSSProperties;
  playbackRate?: number;
}

export const SyncVideoPlayer: FC<SyncVideoPlayerProps> = ({
  videos,
  autoPlay = true,
  muted = true,
  controls = true,
  loop = true,
  style = {},
  playbackRate = 1,
}) => {
  return (
    <div
      style={{
        display: 'table',
        margin: '36px 0',
        width: '100%',
        tableLayout: 'fixed',
        ...style,
      }}
    >
      <div style={{ display: 'table-row' }}>
        {videos.map((video, index) => (
          <div
            key={video.src}
            style={{
              display: 'table-cell',
              verticalAlign: 'top',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                maxWidth: '40vw',
                margin: '0 auto',
              }}
            >
              <video
                src={video.src}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '50vh',
                  objectFit: 'contain',
                  display: 'block',
                }}
                autoPlay={autoPlay}
                muted={muted}
                controls={controls}
                loop={loop}
                playsInline
              />
            </div>
            {video.title && (
              <div
                style={{
                  marginTop: '0.5rem',
                  textAlign: 'center',
                }}
              >
                {video.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
