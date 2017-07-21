enum StateType {
    Final = 1,
    Root = 2,
    Config = 3,
    ImplicitExpression = 4,
    RoundParenthesis = 5,
    CurlyBrace = 6,
    SquareBracket = 7,
    AngleBracket = 8,
    QuoteBracket = 9,
    ApostropheBracket = 10,
    ExplicitExpression = 11,
    Injection = 12
};

export default StateType;
