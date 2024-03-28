import BlogBox1 from "./blog-box1";
import BlogBox2 from "./blog-box2";

export default function Blog() {
    return(
        <>
            <section>
                <div className="blog">
                    <div className="mx-auto">
                        <div className="blog-box px-4 md:px-10 lg:px-24">
                            <BlogBox1 />
                            <BlogBox2 />
                        </div>
                    </div>
                </div>
                <div id="pricing" className="flex invisible mb-0 md:mb-12">s</div>
            </section>
        </>
    )
}