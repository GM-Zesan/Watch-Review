import React from "react";
import "./Blog.css";
const Blogs = () => {
    return (
        <div className="container answering my-5 text center">
            <h3>1. What is Context API ?</h3>
            <p>
                Prop drilling refers to the process of sending props from a
                higher-level component to a lower-level component.Prop drilling
                is the unofficial term for passing data through several nested
                children components.The Context API is a React structure. It
                assists in solving prop-drilling from all levels of your
                application.Context is primarily used when some data needs to be
                accessible by many components at different nesting levels.
            </p>
            <h3>2. What is semantic tag ?</h3>
            <p>
                A semantic element clearly describes its meaning to both the
                browser and the developer.HTML5 semantic tags define the purpose
                of the element.By using semantic markup, you help not only the
                browser understand the meaning of the content but also search
                engines to read the page and find the required information
                faster.Semantic element help us think about the structure of our
                dynamic data.Elements such as header, footer, and article are
                all considered semantic.
            </p>
            <h3>3. Inline VS Inline-Block VS Block.</h3>
            <p>
                <strong>Inline :</strong> Inline elements appears on the same
                line. Inline elements do NOT start on a new line and only takes
                up as much width as its content. So, if you try to set any width
                and height, it will have NO effects. <br />
                <strong>Inline-Block :</strong> It’s essentially the same thing
                as inline, except that you can set height and width values.
                <br />
                <strong>Block :</strong> Block starts on a NEW line and takes up
                the full width available.So that means block elements will
                occupy the entire width of its parent element.We can also set
                height and width values.
            </p>
        </div>
    );
};

export default Blogs;
