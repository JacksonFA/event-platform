import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useGetLessonsQuery } from "../graphql/generated";

export function Event() {
    const navigate = useNavigate()
    const { slug } = useParams<{ slug: string }>()
    const { data } = useGetLessonsQuery()

    if (!slug && data) {
        navigate(`/event/lesson/${data.lessons[0].slug}`)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Sidebar />
            </main>
        </div>
    )
}