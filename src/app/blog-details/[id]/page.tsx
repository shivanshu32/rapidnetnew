import BlogDetailsMain from "@/components/blogDetails/BlogDetailsMain";
import blogs_data from "@/data/blogs-data";
import Wrapper from "@/layout/DefaultWrapper";

const BlogDetailsDynamic = ({ params }: { params: { id: number } }) => {
    const id =  params.id
    const blog = blogs_data.find(item=> item.id == id)
    if(!blog){
      return <p>Loadding..</p>
    }
    return (
        <>
            <Wrapper>
                <main>
                    <BlogDetailsMain id={id} />
                </main>
            </Wrapper>
        </>
    );
}

export default BlogDetailsDynamic