void main() {
  testWidgets('Login form is displayed', (tester) async {
    await tester.pumpAndSettle();
    expect(find.byKey(Key('user_id_field')), findsOneWidget);
    expect(find.byKey(Key('password_field')), findsOneWidget);
    expect(find.byKey(Key('login_button')), findsOneWidget);
  });

  testWidgets('Login button is enabled when form is valid', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MaterialApp(
        home: LoginPage(),
      ),
    ));

    final userIdField = find.byKey(Key('user_id_field'));
    final passwordField = find.byKey(Key('password_field'));
    final loginButton = find.byKey(Key('login_button'));

    await tester.enterText(userIdField, 'valid_user_id');
    await tester.enterText(passwordField, 'valid_password');

    expect(loginButton, isEnabled);
  });

  testWidgets('Login button is disabled when form is invalid', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: MaterialApp(
        home: LoginPage(),
      ),
    ));

    final userIdField = find.byKey(Key('user_id_field'));
    final passwordField = find.byKey(Key('password_field'));
    final loginButton = find.byKey(Key('login_button'));

    await tester.enterText(userIdField, '');
    await tester.enterText(passwordField, '');

    expect(loginButton, isNot(isEnabled));
  });
}