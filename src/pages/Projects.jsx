import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

export default function Projects() {
  const [modalImages, setModalImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images, index = 0) => {
    if (!images || images.length === 0) return;
    setModalImages(images);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImages([]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % modalImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalImages.length) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalImages]);

  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {projects.map((project) => {
        const images = project.images || [project.image]; // fallback for single image
        return (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow"
          >
            <img
              src={images[0]}
              alt={project.title}
              className="w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openModal(images, 0)}
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
                  >
                    Live
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-4 py-2 rounded-lg bg-blue-400 cursor-not-allowed text-white"
                  >
                    Live
                  </button>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-900 transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalImages.length > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full">
              <motion.img
                key={currentIndex}
                src={modalImages[currentIndex]}
                alt="Project Fullscreen"
                className="w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              />

              {/* Navigation */}
              {modalImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
                  >
                    ◀
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
                  >
                    ▶
                  </button>
                </>
              )}

              <button
                onClick={closeModal}
                className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white text-black text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
