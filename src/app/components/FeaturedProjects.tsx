import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function FeaturedProjects() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const completedProjects = [
    {
      title: t('projects.feature1.title'),
      description: t('projects.feature1.description'),
      image: "/yoğun bakım.jpg",
    },
    {
      title: t('projects.feature2.title'),
      description: t('projects.feature2.description'),
      image: "/reflü.jpg",
    },
    {
      title: t('projects.feature3.title'),
      description: t('projects.feature3.description'),
      image: "/klepi.jpg",
    },
    {
      title: t('projects.feature4.title'),
      description: t('projects.feature4.description'),
      image: "/bulut bilişim.jpg",
    },
    {
      title: t('projects.feature5.title'),
      description: t('projects.feature5.description'),
      image: "/ot-vt.jpg",
    },
    {
      title: t('projects.feature6.title'),
      description: t('projects.feature6.description'),
      image: "/demeter.jpg",
    },
    {
      title: t('projects.feature7.title'),
      description: t('projects.feature7.description'),
      image: "/sixt rent.jpg",
    },
    {
      title: t('projects.feature8.title'),
      description: t('projects.feature8.description'),
      image: "/asansör denetim.jpg",
    },
    {
      title: t('projects.feature9.title'),
      description: t('projects.feature9.description'),
      image: "/sixt rent a car crm.jpg",
    },
    {
      title: t('projects.feature10.title'),
      description: t('projects.feature10.description'),
      image: "/adapa marina.jpg",
    },
    {
      title: t('projects.feature11.title'),
      description: t('projects.feature11.description'),
      image: "/doküman1.png",
    },
    {
      title: t('projects.feature12.title'),
      description: t('projects.feature12.description'),
      image: "/quality.png",
    },
    {
      title: t('projects.feature13.title'),
      description: t('projects.feature13.description'),
      image: "/sugartracker.png",
    },
    {
      title: t('projects.feature14.title'),
      description: t('projects.feature14.description'),
      image: "/ada_takip.png",
    },
    {
      title: t('projects.feature15.title'),
      description: t('projects.feature15.description'),
      image: "/covid.png",
    },
    {
      title: t('projects.feature16.title'),
      description: t('projects.feature16.description'),
      image: "/bilgisayarlı_görü.png",
    },
    {
      title: t('projects.feature17.title'),
      description: t('projects.feature17.description'),
      image: "/flare.png",
    },
  ];

  const ongoingProjects = [
    {
      title: t('projects.ongoing1.title'),
      description: t('projects.ongoing1.description'),
      image: "/digitaltwin.png",
    },
    {
      title: t('projects.ongoing2.title'),
      description: t('projects.ongoing2.description'),
      image: "/epikriz.png",
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            {t('projects.heading')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('projects.intro')}
          </p>
        </div>

        {/* Completed Projects Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-[#0F172A]">
              {t('projects.completedTitle')}
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {completedProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                        {project.title}
                      </h3>
                      <div className="flex-1">
                        {expandedId === index ? (
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        ) : index >= 10 ? (
                          <p className="text-gray-600 leading-relaxed line-clamp-4">
                            {project.description}
                          </p>
                        ) : (
                          <p className="text-gray-600 leading-relaxed">
                            {project.description}
                          </p>
                        )}
                      </div>
                      {index >= 10 && project.description.length > 100 && (
                        <button
                          onClick={() => setExpandedId(expandedId === index ? null : index)}
                          className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                        >
                          {expandedId === index ? t('projects.showLess') : t('projects.readMore')}
                        </button>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Ongoing Projects Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-[#0F172A]">
              {t('projects.ongoingTitle')}
            </h3>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {ongoingProjects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
                        {project.title}
                      </h3>
                      <div className="flex-1">
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}