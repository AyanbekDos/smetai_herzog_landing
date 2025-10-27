import { trackEvent } from "@/lib/analytics";

const VideoSection = () => {
  const videoId = import.meta.env.VITE_YOUTUBE_VIDEO_ID || "dQw4w9WgXcQ";
  const hasVideo = Boolean(videoId);
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <section id="video" className="bg-slate-50 py-24">
      <div className="container mx-auto grid w-full max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-center">
        <div className="space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Видео-обзор
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Посмотрите, как Smetai строит план по смете</h2>
          <p className="text-base leading-relaxed text-slate-600">
            Мы записали короткое демо: от загрузки Excel-файла до получения календарного плана и
            финальных отчетов. Видео можно показать вашей команде, чтобы быстрее согласовать пилот.
          </p>
          {hasVideo && (
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("video_watch_external", { target: "youtube" })}
              className="inline-flex items-center rounded-full border border-indigo-200 bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-800"
            >
              Смотреть на YouTube
            </a>
          )}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-indigo-100 shadow-2xl shadow-indigo-200/50">
          {hasVideo ? (
            <iframe
              className="aspect-video w-full"
              src={embedUrl}
              title="Видео демонстрация Smetai"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-slate-900/80 p-10 text-center text-sm text-slate-200">
              Добавьте `VITE_YOUTUBE_VIDEO_ID` в .env, чтобы встроить видео-демо Smetai.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
