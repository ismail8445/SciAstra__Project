// Dummy Data for Courses and Blogs
const courses = [
    { title: "Introduction to Quantum Physics", originalPrice: 100, discountPrice: 50 },
    { title: "Advanced Physics", originalPrice: 120, discountPrice: 90 },
    { title: "Data Science Basics", originalPrice: 150, discountPrice: 100 }
];

const blogs = [];

// Function to Display Real-Time Discounted Courses
function displayCourses() {
    const courseContainer = document.querySelector(".course-container");
    courseContainer.innerHTML = ""; // Clear previous content

    courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Original Price: <span class="original-price">$${course.originalPrice}</span></p>
            <p class="discounted-price">Discounted Price: $${course.discountPrice}</p>
            <button onclick="enrollNow('${course.title}')">Enroll Now</button>
        `;

        courseContainer.appendChild(courseCard);
    });
}

// Function to Handle Course Enrollment
function enrollNow(courseTitle) {
    alert(`You've selected ${courseTitle}. Proceed to purchase in the Purchase section.`);
    document.getElementById("course").value = courseTitle;
    document.getElementById("purchase").scrollIntoView({ behavior: "smooth" });
}

// Function to Schedule Blog Post
function scheduleBlogPost(event) {
    event.preventDefault(); // Prevent form from submitting

    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const publishDate = new Date(document.getElementById("publish-date").value);

    if (title && content && publishDate) {
        blogs.push({ title, content, publishDate });
        displayScheduledBlogs();
        document.getElementById("blog-form").reset();
        alert("Blog post scheduled successfully!");
    } else {
        alert("Please fill in all fields to schedule the blog post.");
    }
}

// Function to Display Scheduled Blog Posts
function displayScheduledBlogs() {
    const blogList = document.querySelector(".blog-list");
    blogList.innerHTML = "<h3>Scheduled Posts</h3>";

    if (blogs.length === 0) {
        blogList.innerHTML += "<p>No posts scheduled yet.</p>";
    } else {
        blogs.forEach(blog => {
            const blogDate = blog.publishDate.toLocaleString();
            blogList.innerHTML += `
                <div class="blog-post">
                    <h4>${blog.title}</h4>
                    <p>To be published on: ${blogDate}</p>
                    <p>${blog.content}</p>
                </div>
            `;
        });
    }
}

// Function to Handle Course Purchase and OTP Verification
function handlePurchase(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;

    if (name && email && otp === "123456") {  // Sample OTP for demonstration
        alert("Purchase successful! You will receive a confirmation email shortly.");
        document.getElementById("purchase-form").reset();
    } else {
        alert("Invalid OTP. Please enter the correct OTP to complete the purchase.");
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    displayCourses();  // Display courses on page load
    displayScheduledBlogs();  // Display scheduled blog posts on page load

    // Blog Scheduling
    document.getElementById("blog-form").addEventListener("submit", scheduleBlogPost);

    // Purchase Flow
    document.getElementById("purchase-form").addEventListener("submit", handlePurchase);
});
