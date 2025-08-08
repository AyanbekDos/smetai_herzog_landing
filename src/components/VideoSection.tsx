import { useLanguage } from "@/contexts/LanguageContext";

const VideoSection = () => {
  const { t } = useLanguage();
  const videoId = (import.meta.env.VITE_YOUTUBE_VIDEO_ID as string) || "VIDEO_ID";
  const hasVideo = !!videoId && videoId !== "VIDEO_ID";
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
  const watchUrl = `https://youtu.be/${videoId}`;

  return (
    <section id="video" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('videoTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('videoSubtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-lg border">
            {hasVideo ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={embedUrl}
                title="SMET.ai demo video"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div>
                  <p className="text-white/90 text-lg mb-4">
                    {t('videoPlaceholder')}
                  </p>
                  <a
                    href="#"
                    className="text-white/80 underline underline-offset-4"
                    aria-disabled="true"
                  >
                    {t('watchOnYoutube')}
                  </a>
                </div>
              </div>
            )}
          </div>

          {hasVideo && (
            <p className="text-center text-muted-foreground mt-4">
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {t('watchOnYoutube')}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
