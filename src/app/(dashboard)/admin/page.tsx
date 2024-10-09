import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
// import "bootstrap/dist/css/bootstrap.min.cs";
import { Container } from "react-bootstrap";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    return (
      <div className="ratio ratio16x9">
        <Container>
          {/* <h2 className="text-slate-200  text-center font-semibold text-bg">
            Camera Live Feed
          </h2> */}
          <iframe
            width="1080"
            height="608"
            src="https://www.youtube.com/embed/ByED80IKdIU?si=KmkJvZEgqBkjkSss"
            className="rounded-lg"
            allow="autoplay"
          ></iframe>
        </Container>
      </div>
    );
  }

  return (
    <h2 className="text-2xl text-slate-200">Please login to see this camera</h2>
  );
};

export default page;
