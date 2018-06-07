## Writing Unit Tests

The project uses [Jest](https://facebook.github.io/jest/) for unit-testing, 
JEST provides mocks, stubs, spies, runs the tests and generates
code coverage reports at `./coverage/lcov-report/index.html`.

Tests are stored in the [src/__tests__/unit](src/__tests__/unit) directory.
They can be run with the following commands:

- `yarn / npm run test` - to run the test suite once
- `yarn / npm run tdd` - to run it continuously, in "tdd-mode"

Before a Pull Request will be considered for merge:

- All new and existing tests must pass

### Test Guidelines
When you are adding code to the project, or modifying code that isn't covered by an existing test, test the code according to these guidelines:

- If the module you are working on is already partially tested by a file within the `__tests__/unit/` directory, add tests to that file
- If the module does not have any tests, create a new test file
- Group tests in a `test` block
- Within a `test` block, it may be helpful to use the "Arrange-Act-Assert" pattern
  - _Arrange_: set up necessary preconditions and inputs
    - e.g., creating objects, spies, etc.
  - _Act_: call or act on the unit under test
    - e.g., call the function you are testing with the parameters you set up
  - _Assert_: check that the expected results have occurred
    - e.g., use expect assertions to check that the expected output is equal to the actual output
- Test the public interface, not the internal implementation

### Test Examples
- Look in `__tests__/unit/` and its subdirectories
The project already has many tests. Read them to see how it is tested. 
For inspiration you can read:
https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#testing-components
https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22 -

*What NOT to test*
*"... Here are three rules of thumb I use to determine that something is not worth testing:*
1. Will the test have to duplicate exactly the application code? This will make it brittle.
2. Will making assertions in the test duplicate any behavior that is already covered by (and the responsibility of) library code?
3. From an outsider’s perspective, is this detail important, or is it only an internal concern? Can the effect of this internal detail be described using only the component’s public API?"
In essence:
1. Find your Component Contract first
2. Decide which constraints are worth testing and which aren’t
3. Prop types are not worth testing
4. Inline styles are usually not worth testing
5. The components you render and what props you give them are important to test
6. Don’t test things that are not the concern of your component

*Basic Test*

```JavaScript
import User from '../src/user'

test('calculates the full name', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(user.fullname).toEqual('Billy Booster')
})
```

*Basic snapshot test*

```JavaScript
import User from '../src/user'

test('serializes to JSON', function () {
  let user = new User({
    first: 'Billy',
    last: 'Booster'
  })

  expect(JSON.stringify(user)).toMatchSnapshot()
})
```
*Testing Components*
This test is a smoke test to mount a component and make sure that it did not throw an error during rendering

```Javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

*Mock Functions*

```JavaScript
test('demo mock functions', function () {
  const handler = jest.fn()

  let button = document.createElement('button')

  button.addEventListener('click', handler)
  button.click()

  expect(handler).toHaveBeenCalled()
})
```

For testing Redux, please see:
https://redux.js.org/recipes/writing-tests