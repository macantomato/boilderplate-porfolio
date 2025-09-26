import { Icons } from "@/components/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const externalSocials = Object.entries(DATA.contact.social).filter(
    ([name]) => name !== "Email"
  );
  const phoneHref = DATA.contact.tel
    ? `tel:${DATA.contact.tel.replace(/[^+\d]/g, "")}`
    : undefined;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {DATA.summary && (
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
      )}

      {DATA.work.length > 0 && (
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {DATA.education.length > 0 && (
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      )}

      {DATA.skills.length > 0 && (
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      {DATA.projects.length > 0 && (
        <section id="projects">
          <div className="w-full space-y-12 py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
                    Selected Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Work I am excited about
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A mix of professional collaborations and personal explorations that help me grow as an engineer.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-background text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let us collaborate
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am always happy to talk about internships, thesis collaborations, or interesting product ideas. Send me an email at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-blue-500 underline-offset-4 hover:underline"
                >
                  {DATA.contact.email}
                </Link>{" "}
                or connect using the links below.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition hover:border-foreground/40"
              >
                <Icons.email className="size-4" />
                Email Me
              </Link>
              {phoneHref && (
                <Link
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition hover:border-foreground/40"
                >
                  Call
                </Link>
              )}
              {externalSocials.map(([name, social]) => (
                <Link
                  key={name}
                  href={social.url}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium transition hover:border-foreground/40"
                >
                  <social.icon className="size-4" />
                  {name}
                </Link>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
