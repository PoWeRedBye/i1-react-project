


export class RootContainer extends React.Component<{}, State> {
  state: State = {
    sideBarIsOpen: false,
  };

  onSideBarStateToggle = () => {
    this.setState((prevState: State) => ({ sideBarIsOpen: !prevState.sideBarIsOpen }));
  };

  // RENDER

  render() {
    return (
      <BrowserRouter>
            <RootRouter />
      </BrowserRouter>
    );
  }
}