import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"
import {experiencesData} from "@/lib/data"
const items = [
    {
        id: 1,
        date: "Mar 15, 2024",
        title: "Project Kickoff",
        description:
            "Initial team meeting and project scope definition. Established key milestones and resource allocation.",
    },
    {
        id: 2,
        date: "Mar 22, 2024",
        title: "Design Phase",
        description:
            "Completed wireframes and user interface mockups. Stakeholder review and feedback incorporated.",
    },
    {
        id: 3,
        date: "Apr 5, 2024",
        title: "Development Sprint",
        description:
            "Backend API implementation and frontend component development in progress.",
    },
    {
        id: 4,
        date: "Apr 19, 2024",
        title: "Testing & Deployment",
        description:
            "Quality assurance testing, performance optimization, and production deployment preparation.",
    },
]

export default function Component() {
    return (
        <Timeline defaultValue={3} className="mt-16">
            {experiencesData.map((item, index) => (
                <TimelineItem
                    key={item.title}
                    step={index + 1}
                    className="mb-4 group-data-[orientation=vertical]/timeline:sm:ms-32"
                >
                    <TimelineHeader>
                        <TimelineSeparator className="bg-gray-800 z-0" />
                        <TimelineDate className="text-gray-900 group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                            {item.date}
                        </TimelineDate>
                        <TimelineTitle className="sm:-mt-0.5 text-md">{item.title}</TimelineTitle>
                        <TimelineIndicator className="border-gray-600 z-10 bg-gray-800"/>
                    </TimelineHeader>
                    <TimelineContent className="text-gray-900">{item.description}</TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}
