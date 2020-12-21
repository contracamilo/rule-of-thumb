# Rule of Thumb

React APP MERN stack

# Rule of Thumb

Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy: You share your opinion, we analyze and put the data in a public report.

[Visit the site](https://amazing-darwin-846e72.netlify.app/)

<details>
	<summary>&nbsp;&nbsp;&nbsp;<img src="https://i.ibb.co/K5cyGgD/icons8-checkmark-52.png" width="20px" height="20px" /> <b>Stack</b></summary>
	<br/>
	<img  src="https://img.shields.io/badge/-React-%23222326"  alt="React/Hooks"/>
	<img  src="https://img.shields.io/badge/-NodeJs-%23222326"  alt="NodeJs"/>
	<img  src="https://img.shields.io/badge/-MongoDB-%23222326"  alt="MongoDB"/>
	<img src="https://img.shields.io/badge/-Express-%23222326" alt="Express"/>
</details>

## Why React?

Mainly the reusable elements and easy to update components and individually or in bulk are the reasons React will be also a great choice if a website comes with a very complex structure that might be hard to keep track of with a traditional, imperative approach. As the application scales, React will allow you to easily keep track of all the interactions.

## front-end

install dependencies:

```bash
 cd ROT_front
 npm install && npm start
```

Run unit test (jest / react testing-library):

```bash

 npm test
```

## Component Estructure Example.

All the components should be documented and their props checked with prop-types on the other hand you should implemenent unit-testing.

```JS
	import React from 'react';
	import PropTypes from 'prop-types';

	/**
	 * Ui component for user interaction.
	 *
	 * @param {object} props passed properties, check prop-types for details.
	 * @return {JSX} Header ui component.
	 */
	const Nav = ({ aria, items }) => {
		return (
			<nav aria-label={aria} className="navigation">
				<ul aria-label={aria} role="menubar" className="navigation__list">
					{(items || []) &&
						items.map((item, index) => (
							<li role="none" key={index} className="navigation__item">
								<a role="menuitem" href={item.url || null} tabIndex="0">
									<span>{item.name}</span>
								</a>
							</li>
						))}
				</ul>
			</nav>
		);
	};

	export default Nav;

	Nav.propTypes = {
		aria: PropTypes.string,
		items: PropTypes.array,
	};

	Nav.defaultProps = {
		aria: 'rule of thumb',
		items: [],
	};

```

## Unit Test Example (@testing-library)

```JS
	import { renderHook, act } from '@testing-library/react-hooks';
	import { usePersonsAPI } from '../../hooks/usePersonsAPI';

	import 'whatwg-fetch';

	describe('useIsHealthyAPI', () => {
		beforeAll(() => {
			global.fetch = fetch;
		});

		test('hook without url passed', () => {
			const { result } = renderHook(() => usePersonsAPI);

			act(() => result.current.data);
			expect(result.current.data).toBeFalsy();
		});

		test('should return data with a successful request', async () => {
			const { result } = renderHook(() => usePersonsAPI('item'));
			const [{ data }] = result.current;

			await act(async () => (result.current.isError = false));

			expect(data).toStrictEqual({
				data: [],
			});
		});
	});

```

## Checklist

### Layout HTML-CSS

Requirements:

-   [x] Use media queries to adapt the layout in small screens. (comp not provided, so use your creativity).
-   [x] Non safe web font used: Lato
-   [x] You can rely on preprocessors / transpilers such as LESS/SASS or any sort of CSS framework if you want. (Pure CSS is also an option but you must argue the benefits)
-   [x] Clicking on one of the links of the main menu redirects the user to the other pages (we only provide a comp for the main page so just use white pages with the title section on them).

### Interaction - JS

Requirements:

-   [x] Create a data feed in JSON format with the structure that best suits the content for the voting boxes and populate the initial content from it.
-   [x] The user can select either thumb up or thumb down button on each of the boxes (when the button is selected, a white border is displayed as featured in the comp)
-   [x] Once the user clicks on the "Vote now” button, a message is displayed saying “Thank you for voting!” as well as a vote again button to vote again.
-   [x] There is no limit in the amount of votes
-   [x] Percentage bars change depending on the up/or downs votes.
-   [x] Persist the current votes
-   [x] Vanilla/DOM JS skills.
-   [x] React
-   [x] Bonus points: Some sort of Test (E2E, BDD, etc)

## NodeJS

Requirements:

-   [x] Create the authentication system and an API with CRUD operations that allows to modify the user information.
