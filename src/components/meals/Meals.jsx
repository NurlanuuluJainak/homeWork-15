import styled from "styled-components";
import { MealItem } from "./MealItem";
import { memo } from "react";
const Meals = ({meals}) => {
  console.log(meals,'jaiank')
  

  return (
    <Container>
      {meals?.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </Container>
  );
};
export default memo(Meals)
const Container = styled.div`
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
  margin-top: 235px;
`;
