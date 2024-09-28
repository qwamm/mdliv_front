import '../App.css'
import {useState} from "react";
import SearchComponent from "./SearchComponent.jsx";
import ShowCourseComponent from "./ShowCourseComponent.jsx";
import UserCartComponent from "./UserCartComponent.jsx";
export default function Shop() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'Миска рис',
            price: 499,
            image:
                'https://img.freepik.com/premium-photo/rice-bowl-white-background_269353-1062.jpg'
        },
        {
            id: 2,
            name: 'Кошка жена',
            price: 29990,
            image:
                'https://cs14.pikabu.ru/post_img/big/2023/01/01/9/1672583613174356185.jpg'
        },
        {
            id: 3,
            name: '2-я лаба по ТА',
            price: 9999999999,
            image:
                'https://intuit.ru/EDI/20_07_20_2/1595197216-9970/tutorial/369/objects/1/files/01-02.gif'
        },
        {
            id: 4,
            name: 'iPhone 16 Pro Max',
            price: 7000,
            image:
                'https://www.iphones.ru/wp-content/uploads/2024/09/iphone-16-pro-models.jpg'
        },
        {
            id: 5,
            name: 'отпуск 30 дней',
            price: 947325,
            image:
                'https://www.h2osport.ru/upload/ammina.optimizer/jpg/q80/upload/medialibrary/c96/c96ac097cae775ecf7a9a1127f09150b.jpg'
        }
    ])
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
            .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? {
                        ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };

    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses
            .reduce((total, item) =>
                total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );

    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse}
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />

                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}